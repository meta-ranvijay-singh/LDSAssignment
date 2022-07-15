import { LightningElement } from 'lwc';

export default class TabComponent extends LightningElement {
	items1 = [
        {
            label: 'Western Sales Director',
            name: '1',
            expanded: true,
            items: [
                {
					label: 'CA Sales Rep',
					name: '3',
					expanded: true,
					items: [],
				},
				{
					label: 'OR Sales Rep',
					name: '4',
					expanded: true,
					items: [],
				},
            ],
        },
		{
            label: 'Western Sales Director',
            name: '1',
            expanded: false,
            items: [
                {
					label: 'CA Sales Rep',
					name: '3',
					expanded: false,
					items: [],
				},
				{
					label: 'OR Sales Rep',
					name: '4',
					expanded: false,
					items: [],
				},
            ],
        },
		{
            label: 'Western Sales Director',
            name: '1',
            expanded: false,
            items: [
                {
					label: 'CA Sales Rep',
					name: '3',
					expanded: false,
					items: [],
				},
				{
					label: 'OR Sales Rep',
					name: '4',
					expanded: false,
					items: [],
				},
            ],
        },
    ];
}