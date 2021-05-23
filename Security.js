class Security {

    constructor(){
       this.input = createInput("Name");
       this.button = createButton("Check");
    }
    hide(){
        this.input.hide();
        this.button.hide();
    }
    display(){
        this.access1 = createInput("Code1");
        this.access1.position(100,120);
        this.access1.style('background','white');

        this.button1 = createButton('Check');
        this.button.position(200,150);
        this.button.style('background', 'lightpink');

        this.access2 = createInput("Code2");
        this.access2.position(700,200);
        this.access2.style('background','white');

        this.button2 = createButton('Check');
        this.button2.position(800,230);
        this.button2.style('background','lightgreen');

        this.access3 = createInput("Code3");
        this.access3.position(100,300);
        this.access3.style('background','white');

        this.button3 = createButton('Check');
        this.button3.position(180,330);
        this.button3.style('background','lightblue');

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
               this.button1.hide();
               this.access1.hide();
               score++;
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
               this.button2.hide();
               this.access2.hide();
               score++;
            }
        });

    }

}