import { Component } from '@angular/core';

@Component({
  selector: 'app-photography',
  standalone: false,
  templateUrl: './photography.component.html',
  styleUrl: './photography.component.css'
})
export class PhotographyComponent {

}

import { Component, OnInit } from '@angular/core';

interface Post {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  author?: string;
}

@Component({
  selector: 'app-photography',
  standalone: false,
  templateUrl: './photography.component.html',
  styleUrl: './photography.component.css'
})
export class PhotographyComponent implements OnInit {
  
  featuredPost: Post = {
    id: 1,
    title: 'The Art of Nature Photography',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur egestas risus. Sed eros augue, tempor et faucibus eu, cursus ac lacus. Ut sodales semper ante, at malesuada neque.',
    date: 'April 12, 2023',
    image: 'travel-2.jpeg',
    category: 'Photography',
    author: 'Admin'
  };

  posts: Post[] = [
    {
      id: 2,
      title: 'Capturing the Perfect Sunset',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur egestas risus. Sed eros augue, tempor et faucibus eu, cursus […]',
      date: 'March 25, 2023',
      image: 'travel-1.jpg',
      category: 'Photography'
    },
    {
      id: 3,
      title: 'Portrait Photography Tips',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur egestas risus. Sed eros augue, tempor et faucibus eu, cursus […]',
      date: 'March 18, 2023',
      image: 'travel-5.jpeg',
      category: 'Photography'
    },
    {
      id: 4,
      title: 'Urban Photography Essentials',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur egestas risus. Sed eros augue, tempor et faucibus eu, cursus […]',
      date: 'March 10, 2023',
      image: 'travel-4.jpeg',
      category: 'Photography'
    },
  
  ];

  recentPosts: Post[] = [
    {
      id: 6,
      title: 'Best 50 tips for travel',
      excerpt: '',
      date: 'March 27, 2023',
      image: 'assets/recent-post-1.jpg',
      category: 'Travel'
    },
    {
      id: 7,
      title: 'The Santa Barbara Wildfire',
      excerpt: '',
      date: 'March 17, 2023',
      image: 'assets/recent-post-2.jpg',
      category: 'Sports'
    },
    {
      id: 8,
      title: 'Totes and Tarragon',
      excerpt: '',
      date: 'March 16, 2023',
      image: 'assets/recent-post-3.jpg',
      category: 'Fashion'
    }
  ];

  categories = [
    { name: 'Business', count: 3 },
    { name: 'Fashion', count: 6 },
    { name: 'Photography', count: 4 },
    { name: 'Sports', count: 5 },
    { name: 'Travel', count: 6 },
    { name: 'Uncategorized', count: 4 }
  ];

  constructor() { }

  ngOnInit(): void {
    // Any initialization code can go here
  }

  subscribeTo(email: string): void {
    console.log('Subscribing email:', email);
    // Here you would typically call a service to handle the subscription
    alert('Thank you for subscribing!');
  }
}
