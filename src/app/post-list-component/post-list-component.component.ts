import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {
  // Fait le lien avec l'affichage
  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;

  constructor() { }

  ngOnInit() {
  }
  // Permet de détmeriner la couleur du post
  getColor(){
    if (this.loveIts > 0) {
      return 'green'  
    }else if(this.loveIts < 0){
      return 'red'
    }else{
      return 'light'
    }
  }

  // Méthode utilisé lors du click sur les boutons Love It / Don't love it
  onLoveIt(){
    console.log(this.loveIts)
    this.loveIts = this.loveIts + 1
    return this.loveIts
    
  }
  onDontLoveIt(){
    console.log(this.loveIts)
    this.loveIts = this.loveIts - 1
    return this.loveIts
  }
}
