export default {
	name: 'event',
	type: 'document',
	title: 'Event',
	fields: [
		{
			name: 'date',
			type: 'string',
			title: 'date and time',
		},
		{
			name: 'title',
			type: 'string',
			title: 'Title of the event',
		},
		{
			name: 'smallDescription',
			type: 'text',
			title: 'Small Description',
		},
		{
			name: 'format',
			type: 'string',
			title: 'Online or In-person',
			options: {
				list: [
					{title: 'Online', value: 'online'},
					{title: 'In-person', value: 'in-person'},
				],
			},
		},
		{
			name: 'href',
			type: 'url',
			title: 'URL'
		},

	],
}