import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {


    transform(heroes: Hero[], orderBy?: keyof Hero | '' | null | undefined): Hero[] {
        switch (orderBy) {
            case 'name':
                return heroes.sort((a, b) => {
                    if (a.name > b.name) {
                        return 1;
                    } else {
                        return -1;
                    }
                });
            case 'canFly':
                return heroes.sort((a, b) => {
                    if (a.canFly > b.canFly) {
                        return 1;
                    } else {
                        return -1;
                    }
                });
            case 'color':
                return heroes.sort((a, b) => {
                    if (a.color > b.color) {
                        return 1;
                    } else {
                        return -1;
                    }
                });
            default:
                return heroes;
        }
    }

    // transform(heroes: Hero[], orderBy?: keyof Hero | '' | null | undefined): Hero[] {
    //     return heroes.sort((a, b) => {
    //         if (a[orderBy as keyof Hero] > b[orderBy as keyof Hero]) {
    //             return 1;
    //         } else {
    //             return -1;
    //         }
    //     });
    // }

}
