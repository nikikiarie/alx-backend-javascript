class Utils {
    static calculateNumber(type, a, b) {
	const az = Math.round(a);
	const bz = Math.round(b);
	let c = 0;
	switch (type) {
	case 'SUM':
            c = az + bz;
            break;
	case 'SUBTRACT':
            c = az - bz;
            break;
	case 'DIVIDE':
	    if (bz === 0) {
		c = "Error";
	    } else {
		c = az / bz;
	    }
	    break;
	}
	return c;
    }
}

module.exports = Utils;