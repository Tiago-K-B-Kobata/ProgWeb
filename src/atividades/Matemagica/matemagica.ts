class matemagica {
    x:number
    y:number

    private sum() {
        return this.x + this.y
    }

    public setX(x) {
        this.x = x
    }

    public setY(y){
        this.y = y
    }

    public getX(){
        return this.x
    }

    public getY(){
        return this.y
    }

    public getSum(){
        return this.sum()
    }

}