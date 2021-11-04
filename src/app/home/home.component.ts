import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { CanonicalService } from '../services/canonical.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import CATEGORIES_QUERY from '../apollo/queries/category/categories';
import { Subscription } from 'rxjs';

// import * as dataJSON from './carousel_images.json';
/**
 * @title Basic cards
 */

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig], // add NgbCarouselConfig to the component providers
})
export class HomeComponent implements OnInit {
  data: any = {};
  loading = true;
  errors: any;
  private queryCategories: Subscription;
  // images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(
    config: NgbCarouselConfig,
    private title: Title,
    private apollo: Apollo,
    private canonicalService: CanonicalService
  ) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    config.interval = 8000; // images change in 8sec //
    config.wrap = true; // autometically redirect to first image //
    config.keyboard = true;
    config.pauseOnHover = true;
  }
  showNavigationArrows = false;
  showNavigationIndicators = false;
  public images = [
    'https://res.cloudinary.com/dyzeuqi75/image/upload/v1636015836/24_umfcg8.jpg',

    'https://res.cloudinary.com/dyzeuqi75/image/upload/v1636015327/00100sPORTRAIT_00100_BURST20200111191729472_COVER_blvkrl.jpg',

    'https://res.cloudinary.com/dyzeuqi75/image/upload/v1636015330/BURST20200903175651946_COVER_wlt9rh.jpg',

    'https://res.cloudinary.com/dyzeuqi75/image/upload/v1636015749/IMG_3627_ushpoq.jpg',
  ];
  titles = ['iOS', 'Android', 'Web Apps', 'Cross-platform Apps'];
  discription = [
    'iOS mobile applications',
    'Android mobile applications',
    'Any type of website',
    'Same app working on iOS, Android and Web ',
  ];

  members: { title: string; subtitle: string; content: string; url: string }[] =
    [
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: 'Content here',
        url: 'https://res.cloudinary.com/sputnik-tech/image/upload/v1635003534/small_IMG_3459_4aa4622e1d.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: 'Content here',
        url: ' https://res.cloudinary.com/sputnik-tech/image/upload/v1635003534/small_IMG_3459_4aa4622e1d.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: 'Content here',
        url: ' https://res.cloudinary.com/sputnik-tech/image/upload/v1635003534/small_IMG_3459_4aa4622e1d.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: 'Content here',
        url: ' https://res.cloudinary.com/sputnik-tech/image/upload/v1635003534/small_IMG_3459_4aa4622e1d.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: 'Content here',
        url: ' https://res.cloudinary.com/sputnik-tech/image/upload/v1635003534/small_IMG_3459_4aa4622e1d.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: 'Content here',
        url: ' https://res.cloudinary.com/sputnik-tech/image/upload/v1635003534/small_IMG_3459_4aa4622e1d.jpg',
      },
    ];

  ngOnInit(): void {
    this.canonicalService.setCanonicalURL();
    this.title.setTitle('Takudzwa Mupanesure (Sputnik Tech)');
    this.queryCategories = this.apollo
      .watchQuery({
        query: CATEGORIES_QUERY,
      })
      .valueChanges.subscribe((result) => {
        this.data = result.data;
        this.loading = result.loading;
        this.errors = result.errors;
      });
  }

  ngOnDestroy() {
    this.queryCategories.unsubscribe();
  }
}




