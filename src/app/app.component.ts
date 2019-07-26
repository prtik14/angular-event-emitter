import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // name = 'Angular';

  BrandList = [{
    brandName: 'MyBrand',
    brandLink: 'https://www.google.com',
    brandDesc: 'Life not good',
    brandLogo: 'https://cdn.shopify.com/s/files/1/0258/2125/files/Famous_Logo_large.png?4225',
  },
  {
    brandName: 'FamousCookies',
    brandLink: 'https://www.cookies.com',
    brandDesc: 'Best Cookies',
    brandLogo: 'https://cdn.iconscout.com/icon/free/png-256/famous-285134.png',
  },
  {
    brandName: 'DPI',
    brandLink: 'https://www.dpi.com',
    brandDesc: 'well played',
    brandLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv_2fj9Gf9gqTH7-v6rx8I9akW0outyNDm1uuuZsJQCOHV5P8K',
  },
  ];

  removeBrand(event){
    for( let i of this.BrandList){
      if(event === i.brandName){
        i.brandDesc="";
        i.brandLink="";
        i.brandLogo="";
        i.brandName="";
      }
    }
  }
}
