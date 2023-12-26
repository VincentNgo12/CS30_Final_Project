function Array_2D(row, column){
	return new Array(row).fill(0).map(() => new Array(column).fill(0));
}