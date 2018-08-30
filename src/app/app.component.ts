import { Component } from '@angular/core';
import { mergeAnalyzedFiles } from '@angular/compiler';
import { setRootDomAdapter } from '@angular/platform-browser/src/dom/dom_adapter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Tableau des posts à afficher
  posts = [
    {
    title: 'Météo',
    content: 'Il fait pas beau depuis bientôt une semaine \
    c\'est un temps pour aller en mer, voir les dauphins. \
    Mais voilà il faut se former à angular',
    loveIts: 5,
    created_at: new Date(Date.now() + 1 * 24*60*60*1000)

    },
    {
    title: 'Tennis',
    content: 'Passé à un point de l\'exploit lors de son \
    dernier duel face à Roger Federer, Benoît Paire va \
    retenter sa chance sur le court Arthur-Ashe au 2e tour \
    de l\'US Open, jeudi à New York.',
    loveIts: -1,
    created_at: new Date(Date.now() - 4 * 24*60*60*1000)
    },
    {
    title: 'Deuxième étoile !',
    content: 'Du nord au sud de la France, une immense clameur s\'est \
    élevée à la fin du match de finale de la Coupe du monde remportée \
    par l\'équipe de France (4-2) face à la Croatie. Depuis les fan zones \
    jusqu\'aux bars de quartiers, la liesse s\'est répandue dans les rues \
    où les Français s\'apprêtaient à faire la fête toute la nuit.',
    loveIts: 10,
    created_at: new Date(Date.now() - 10 * 24*60*60*1000)
    }
  ];
}
