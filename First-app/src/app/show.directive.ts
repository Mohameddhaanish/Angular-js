import {Directive,Input,TemplateRef,ViewContainerRef} from '@angular/core';

@Directive
({
    selector:'[show]'
})
export class AppShow{
     rendered=false;
@Input() set show(value: any){

if(value && !this.rendered)
{
this.container.createEmbeddedView(this.template);
}
else if (!value && this.rendered)
{
    this.container.clear();
}

}
    constructor(public template:TemplateRef<any>,public container:ViewContainerRef)
    {

    }




}