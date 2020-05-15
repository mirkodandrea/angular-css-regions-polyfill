import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-root',
  templateUrl: './app-root.component.html',
  styleUrls: ['./app-root.component.scss']
})
export class AppRootComponent implements OnInit {
  public contentHtml:string = `<h1>At iste non dolendi status non vocatur voluptas.</h1>

  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <code>Ego vero isti, inquam, permitto.</code> Nec vero sum nescius esse utilitatem in historia, non modo voluptatem. Tum, Quintus et Pomponius cum idem se velle dixissent, Piso exorsus est. Et nemo nimium beatus est; <i>Et quod est munus, quod opus sapientiae?</i> Istam voluptatem, inquit, Epicurus ignorat? <a href="http://loripsum.net/" target="_blank">Duo Reges: constructio interrete.</a> Satis est ad hoc responsum. Negat esse eam, inquit, propter se expetendam. </p>
  
  <dl>
    <dt><dfn>In schola desinis.</dfn></dt>
    <dd>Bestiarum vero nullum iudicium puto.</dd>
    <dt><dfn>Immo alio genere;</dfn></dt>
    <dd>Quod autem satis est, eo quicquid accessit, nimium est;</dd>
    <dt><dfn>Equidem e Cn.</dfn></dt>
    <dd>Totum autem id externum est, et quod externum, id in casu est.</dd>
    <dt><dfn>Tu quidem reddes;</dfn></dt>
    <dd>Sed in rebus apertissimis nimium longi sumus.</dd>
  </dl>
  
  
  <ol>
    <li>Iam id ipsum absurdum, maximum malum neglegi.</li>
    <li>Nam aliquando posse recte fieri dicunt nulla expectata nec quaesita voluptate.</li>
    <li>Facit enim ille duo seiuncta ultima bonorum, quae ut essent vera, coniungi debuerunt;</li>
  </ol>
  
  
  <p>Cur igitur, inquam, res tam dissimiles eodem nomine appellas? Quod autem meum munus dicis non equidem recuso, sed te adiungo socium. Aufidio, praetorio, erudito homine, oculis capto, saepe audiebam, cum se lucis magis quam utilitatis desiderio moveri diceret. Ita multo sanguine profuso in laetitia et in victoria est mortuus. Et ille ridens: Video, inquit, quid agas; </p>
  
  <pre>Quod si ita se habeat, non possit beatam praestare vitam
  sapientia.
  
  Aut unde est hoc contritum vetustate proverbium: quicum in
  tenebris?
  </pre>
  
  
  <blockquote cite="http://loripsum.net">
    Itaque idem natura victus, cui obsisti non potest, dicit alio loco id, quod a te etiam paulo ante dictum est, non posse iucunde vivi nisi etiam honeste.
  </blockquote>
  
  
  <ul>
    <li>Est, ut dicis, inquit;</li>
    <li>Scripta sane et multa et polita, sed nescio quo pacto auctoritatem oratio non habet.</li>
    <li>Quis est enim, in quo sit cupiditas, quin recte cupidus dici possit?</li>
    <li>Potius ergo illa dicantur: turpe esse, viri non esse debilitari dolore, frangi, succumbere.</li>
  </ul>
  
  
  <p>Non autem hoc: igitur ne illud quidem. Sed quid sentiat, non videtis. Tecum optime, deinde etiam cum mediocri amico. Familiares nostros, credo, Sironem dicis et Philodemum, cum optimos viros, tum homines doctissimos. <b>Num quid tale Democritus?</b> Hoc mihi cum tuo fratre convenit. </p>
  
  `;
  public footerHtml:string = `<img src="https://picsum.photos/seed/header/595/130?grayscale">`
  public headerHtml:string = `<img src="https://picsum.photos/seed/footer/595/130?grayscale">`

  constructor() { }

  ngOnInit() {
  }

}
