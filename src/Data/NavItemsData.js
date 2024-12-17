const navItemsData = [
  { title: 'Home', path: '/' },
  { 
    title: 'About Us', 
    path: '/about', 
    dropdown: [{ title: 'Mission', path: '/about/mission' }, { title: 'Vision', path: '/about/vision' }]
  },
  { 
    title: 'Gallery', 
    path: '/gallery', 
    dropdown: [{ title: 'Photos', path: '/gallery/photos' }, { title: 'Videos', path: '/gallery/videos' }]
  },
  { 
    title: 'Sanatan Dharm Sanshad', 
    path: '/sanatan-dharm', 
    dropdown: [{ title: 'Events', path: '/sanatan-dharm/events' }]
  },
  { title: 'Schedule', path: '/schedule' },
  { title: 'Donate Now', path: '/donate' }
];

export default navItemsData;
