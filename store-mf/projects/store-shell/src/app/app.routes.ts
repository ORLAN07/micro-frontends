import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
    {
        path: "123",
        redirectTo: "motorbikes-mf",
        pathMatch: "full"
    },
    {
        path: "motorbikes-mf",
        loadChildren: () => 
            loadRemoteModule({
                type: 'module',
                remoteEntry: 'http://localhost:4201/remoteEntry.js',
                exposedModule: './motorbikesRoutes'
            }).then(m => { return m.motorbikesRoutes})
    }
];
