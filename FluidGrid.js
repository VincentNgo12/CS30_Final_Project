const HORIZONTAL = 1;
const VERTICAL = 2;


class FluidGrid{
	constructor(size, diffusion, viscosity, dt){

	}
	
	
	// Main step function
	step(){

	}
	
	
	// Method to add (Dye) density
	addDensity(x,y,amount){

	}
	
	
	// Method to add velocity to grids
	addVelocity(x,y,amountX,amountY){

	}
	
	
	// Method to fix properties of boundary cells
	set_bnd(b, properties, N){

	}
	
	
	// Gauss-Seidel method to solve linear systems of equations
	lin_solve(b, x, x0, a, c, iter, N){

	}
	
	
	// Diffuse method
	diffuse(b, x, x0, diff, dt, iter, N){

	}
	
	
	// project method to fix divergences
	project(Vx, Vy, p, div, iter, N){

	}
	
	
	// Advect method
	advect(b, d, d0, Vx, Vy, dt, N){

	}
	
	
	render(){

	}
}