const navItemsData = [
  { title: 'Home', path: '/' },
  { 
    title: 'About Us', 
    dropdown: [
      { title: 'About US', path: '/about/aboutus' },
    ]
  },
  { 
    title: 'Gallery', 
    dropdown: [
      { title: 'Videos', path: '/gallery/videos' }
    ]
  },
  { 
    title: 'Sanatan Dharm Sanshad', 
    dropdown: [
      { title: 'Events', path: '/sanatan-dharm/events' }
    ]
  },
  { title: 'Donate Now', path: '/donate' }
];

export default navItemsData;
