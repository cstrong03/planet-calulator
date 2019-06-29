function planetWeightCalculator(planet, weight){
	switch(planet.toLowerCase()){
		case 'mercury':
    	return weight * 0.38
    	break;
    	case 'venus':
    	return weight * 0.91
    	break;
    	case 'earth':
    	return weight * 1.00
    	break;
    	case 'mars':
    	return weight * 0.38
    	break;
    	case 'jupiter':
    	return weight * 2.34
    	break;
    	case 'saturn':
    	return weight * 1.06
    	break;
    	case 'uranus':
    	return weight * 0.92
    	break;
    	case 'neptune':
    	return weight * 1.19
    	break;
    	case 'pluto':
    	return weight * 0.06
    	break;
    	default:
    		return('error please try again');
	}
}

console.log(planetWeightCalculator('hello' , 72));
