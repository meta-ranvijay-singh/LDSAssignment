import { api, LightningElement } from 'lwc';

export default class CardList extends LightningElement {
	@api icon;
	@api body;
	@api title;
}