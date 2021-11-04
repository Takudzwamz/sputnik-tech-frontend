import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 // title = '#RegisterToVoteZW';

  constructor(private metaTagService: Meta) {}


  ngOnInit(): void {
    this.metaTagService.addTags([
      {
        name: 'keywords',
        content:
          'Takudzwa, Mupanesure, CSS, HTML, .Net, C#, Angular, Software development, Computer science, E-commerce, Android apps, iOS apps, Windows, .Net 6, ASP.NET Core, SQL, No- SQL, Mongodb, Mysql, Digital Ocean, Github, Software developer, dev, web',
      },
      { name: 'robots', content: 'index, follow' },
      
      {
        name: 'description',
        content:
          'I am a Software Engineer who is passionate about software advancements. If you like what I do please dont hesitate to contact me, lets work together',
      },
      { name: 'author', content: 'Sputnik Tech' },
      { name: 'twitter:card', content: 'Takudzwa Mupanesure' },
      {
        name: 'twitter:title',
        content:
          'Software is the backbone of the modern society',
      },
      {
        name: 'twitter:description',
        content:
          'I am a Software Engineer who is passionate about software advancements. If you like what I do please dont hesitate to contact me, lets work together',
      },
    ]);
  }
}
