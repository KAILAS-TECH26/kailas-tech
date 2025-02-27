import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.scss',
  imports: [CommonModule]  // ✅ Import CommonModule
})
export class BlogPostComponent {

  posts = [
    {
      title: 'Web Design Trends in 2024',
      description: 'Discover the latest web design trends that are shaping the digital world in 2024. From responsive design to immersive user experiences, this year promises exciting developments in web design...',
      date: '01 Dec, 2024',
      category: 'Web Design',
      imageUrl: '../../../assets/project5.jpg',
      showFullDescription: false
    },
    {
      title: 'Best Programming Practices for Clean Code',
      description: 'Learn the best programming practices that can help you write clean, maintainable, and efficient code. These practices are essential for any developer aiming to improve their coding skills...',
      date: '15 Nov, 2024',
      category: 'Programming',
      imageUrl: '../../../assets/project4.jpg',
      showFullDescription: false
    },
    {
      title: 'Effective Marketing Strategies for 2024',
      description: 'As the digital marketing landscape continues to evolve, it\'s important to stay on top of the latest strategies. This blog post outlines the key marketing trends and tactics you should embrace in 2024...',
      date: '25 Nov, 2024',
      category: 'Marketing',
      imageUrl: '../../../assets/project2.jpg',
      showFullDescription: false
    }
  ];

  toggleDescription(index: number): void {
    this.posts[index].showFullDescription = !this.posts[index].showFullDescription;
  }
}
