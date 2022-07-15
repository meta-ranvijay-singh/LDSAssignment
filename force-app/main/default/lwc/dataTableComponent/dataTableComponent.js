import { LightningElement } from 'lwc';

const columns = [
    { label: 'Opportunity', fieldName: 'opportunity' },
    { label: 'Account Name', fieldName: 'name' },
    { label: 'Close Date', fieldName: 'date', type: "date",
	typeAttributes:{
		month: "2-digit",
		day: "2-digit",
		year: 'numeric'
	} },
    { label: 'Stage', fieldName: 'stage' },
    { label: 'Confidence', fieldName: 'confidence' },
	{ label: 'Amount', fieldName: 'amount', type: 'currency' },
	{ label: 'Contact', fieldName: 'contact', type: 'email' },
];

export default class DataTableComponent extends LightningElement {
	data = [
		{
			opportunity:'Cloudhub',
			name:'Cloudhib',
			date:'4/14/2015',
			stage:'Prospecting',
			confidence:'20',
			amount:'20',
			contact:'abc@gmail.com'
		},
		{
			opportunity:'Cloudhub',
			name:'Cloudhib',
			date:'4/14/2015',
			stage:'Prospecting',
			confidence:'20',
			amount:'20',
			contact:'abc@gmail.com'
		},
		{
			opportunity:'Cloudhub',
			name:'Cloudhib',
			date:'4/14/2015',
			stage:'Prospecting',
			confidence:'20',
			amount:'20',
			contact:'abc@gmail.com'
		},
		{
			opportunity:'Cloudhub',
			name:'Cloudhib',
			date:'4/14/2015',
			stage:'Prospecting',
			confidence:'20',
			amount:'20',
			contact:'abc@gmail.com'
		},
		{
			opportunity:'Cloudhub',
			name:'Cloudhib',
			date:'4/14/2015',
			stage:'Prospecting',
			confidence:'20',
			amount:'20',
			contact:'abc@gmail.com'
		},
		{
			opportunity:'Cloudhub',
			name:'Cloudhib',
			date:'4/14/2015',
			stage:'Prospecting',
			confidence:'20',
			amount:'20',
			contact:'abc@gmail.com'
		},
		{
			opportunity:'Cloudhub',
			name:'Cloudhib',
			date:'4/14/2015',
			stage:'Prospecting',
			confidence:'20',
			amount:'20',
			contact:'abc@gmail.com'
		},
		{
			opportunity:'Cloudhub',
			name:'Cloudhib',
			date:'4/14/2015',
			stage:'Prospecting',
			confidence:'20',
			amount:'20',
			contact:'abc@gmail.com'
		},
		{
			opportunity:'Cloudhub',
			name:'Cloudhib',
			date:'4/14/2015',
			stage:'Prospecting',
			confidence:'20',
			amount:'20',
			contact:'abc@gmail.com'
		},
	];
    columns = columns;
}