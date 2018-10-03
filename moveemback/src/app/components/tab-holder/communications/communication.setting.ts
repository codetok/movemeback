export const communicationSettings = [
  {
    title: 'Email',
    introText: 'Choose what type of emails you want to receive from movemeback ',
    settings: {
      title: 'Which Emails do you want to receive ?',
      introText: `Choose only the emails you would like to receive. For even more control, select Details. 
      Please note that you cannot opt out of receiving service messages, such as payment, security or legal notice`,
      options: [
        {
          title: 'Career Notification',
          introText: 'Invitation to join your network',
          selection: true,
          type: 'checkbox',
          details: [
            'detail 1',
            'detail 2',
            'detail 3'
          ]
        },
        {
          title: 'Career Notification Reminder',
          introText: 'Invitation to join your network',
          selection: true,
          type: 'checkbox',
          details: [
            'detail 1',
            'detail 2',
            'detail 3'
          ]
        }
      ]
    }
  },
  {
    title: 'Phone Number',
    introText: 'Choose what type of emails you want to receive from movemeback ',
  }
];
