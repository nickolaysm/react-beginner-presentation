
var SnowField = React.createClass({

	render: function() {
		var snowflakes = [];
		for(i=0; i++; i <= this.props.count){
			snowflakes.push(<Snowflake/>)
		}

	    return (
	    	<div style={{width:"100%", height:"100%"}}>
	    		{snowflakes}
	    	</div>
	    	);
	}
})


var Snowflake = React.createClass({
	HALH_SIZE : 15,
	FREEZ_ITERATION : 5,

	componentWillMount : function(){
		this.setState({
			top   : 0, 
			left  : Math.random() * window.innerWidth,
			stepY : 2 + Math.random() * 3,
		    stepX : 0.1 + Math.random() * 0.1
		});
	},

	componentWillUpdate : function(){
		this.setState({top: this.state.top + this.state.stepY, left: this.state.left + this.state.stepX});
	},

	componentWillReceiveProps: function() {
	},

	shouldComponentUpdate: function(){
		
		if(this.state.iteration >= this.FREEZ_ITERATION){
			this.componentWillMount();
			return true;
		}

		if(this.state.top >= (window.innerHeight - this.HALH_SIZE)){
			var iteration = this.state.iteration ? this.state.iteration + 1 : 1;
			this.setState({freez: true, iteration: iteration});
			return false
		} 

		return true;
	},

	render: function() {		
	    return (
	    	<div className="snowflake"  style={{left: this.state.left, top: this.state.top}}></div>
	    	);
	}
})

