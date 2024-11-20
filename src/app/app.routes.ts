import { Routes } from '@angular/router';
import { LayoutComponent } from './Component/layout/layout.component';
import { CounterComponent } from './Component/counter/counter.component';
import { RegisterComponent } from './Component/register/register.component';
import { CartComponent } from './Component/cart/cart.component';

export const routes: Routes = [
    {
        path :'',
        redirectTo :'login',
        pathMatch :'full'
    },
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'counter',
                component:CounterComponent
            },
            {
                path:'cart',
                component:CartComponent
            }
            
        ]
    },
    {
        path:'register',
        component:RegisterComponent
    }

    
];
