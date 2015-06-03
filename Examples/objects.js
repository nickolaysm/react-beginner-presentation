var DinamicDivComponent = React.createClass({
	contextTypes: {
	    width: React.PropTypes.string.isRequired
	},			
	propTypes: {
	  width   : React.PropTypes.string,
	  height  : React.PropTypes.string,
	  message : React.PropTypes.string, 
	  onClick : React.PropTypes.func
	},
	render: function() {
	  return (
	      <div className="message" style={{
	          width  : this.context.width, 
	          height : this.props.height}}
	          {...this.props}
	      >{this.props.message}<div style={{width:"10px", height:"10px", backgroundColor:"blue"}}>*</div></div>
	  )
	}
});

var CompositeDivComponent = React.createClass({
	getInitialState : function(){
		return {message:"Hello"};
	},
	onClick : function(){
		this.setState({message:
	    	this.state.message == "Hello"? "Bye" : "Hello"})
	},
	render: function() {
	  return (
		<div>
	       <DinamicDivComponent width="50px" height="20px" message={this.state.message} />
	       <DinamicDivComponent width="100px" height="20px" message="Click me" 
	          onClick={this.onClick}/>
	    </div>
	  )
	}
});

var addContextFunction = function(component){
	return React.createClass({
	    childContextTypes: {
	         width: React.PropTypes.string.isRequired
	    },
	    getChildContext: function() {
	         return { width: "300px" };
	    },				
		render : function(){
			return React.createElement(component);
		}
	});
};

