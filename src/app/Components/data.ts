export interface SliderImage {
  src: string;
  alt: string;
  file?: File;
}

export interface CardData {
  id: number;
  imageUrl: string;
  imageFile?: File;
  category: string;
  title: string;
  description: string;
  content: string;
  author: {
    name: string;
    avatarUrl: string;
  };
  date: string;
  sliderImages?: SliderImage[];
}

export const fileToDataUrl = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

// Helper function to create a new empty card
export const createEmptyCard = (id: number): CardData => ({
  id,
  imageUrl: "https://placehold.co/600x400/222/FFF?text=New+Card",
  category: "Technology",
  title: "New Card Title",
  description: "Add your description here",
  content: "<p>Start writing your content here...</p>",
  author: {
    name: "astroverse",
    avatarUrl: "https://i.pravatar.cc/150?img=1",
  },
  date: new Date().toISOString().split('T')[0],
  sliderImages: [],
});

export const cardsData: CardData[] = [
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2071",
    category: "Technology",
    title: "Exploring the New React 19 Features",
    description:
      "A deep dive into the upcoming features of React 19, including the new compiler and automatic memoization.",

    sliderImages: [
      {
        src: "https://images.unsplash.com/photo-1764877805075-c0cdcb2da65c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "React code on screen",
      },
      {
        src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070",
        alt: "Laptop with code",
      },
      {
        src: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070",
        alt: "Close-up of HTML code",
      },
    ],

    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit quisquam ut laudantium earum adipisci delectus ratione consequuntur. Facilis ullam sint, ducimus rem distinctio mollitia facere esse sit ipsam natus ex aperiam cum unde odio nostrum.</p>

      <p>Est facilis reprehenderit molestias fuga consequuntur assumenda architecto repudiandae tenetur possimus repellat inventore saepe quae incidunt, doloribus quidem. Quibusdam minus vero quia cupiditate, nesciunt excepturi fugiat labore culpa corrupti?</p>

      <p><img src="https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2070" alt="A modern development setup with multiple monitors" style="max-width:100%;height:auto;border-radius:8px;margin:1rem 0;" /></p>

      <p>Earum quae nobis totam nam aperiam expedita unde cumque accusantium, ratione incidunt, quia repellat quibusdam alias maxime soluta labore autem! Hic laudantium totam eum nisi culpa quo rerum itaque iusto ipsam provident! Iusto deleniti architecto inventore voluptas culpa vitae modi, earum velit exercitationem.</p>
    `,

    author: {
      name: "Jane Doe",
      avatarUrl: "https://i.pravatar.cc/150?img=1",
    },
    date: "22-10-2025",
  },

  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2070",
    category: "Web Development",
    title: "Next.js vs. Remix: A Detailed Comparison",
    description:
      "Which framework is right for your next project? We compare performance, features, and developer experience.",
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit quisquam ut laudantium earum adipisci delectus ratione consequuntur. Facilis ullam sint, ducimus rem distinctio mollitia facere esse sit ipsam natus ex aperiam cum unde odio nostrum. Est facilis reprehenderit molestias fuga consequuntur assumenda architecto repudiandae tenetur possimus repellat inventore saepe quae incidunt, doloribus quidem. Quibusdam minus vero quia cupiditate, nesciunt excepturi fugiat labore culpa corrupti? Earum quae nobis totam nam aperiam expedita unde cumque accusantium, ratione incidunt, quia repellat quibusdam alias maxime soluta labore autem! Hic laudantium totam eum nisi culpa quo rerum itaque iusto ipsam provident! Iusto deleniti architecto inventore voluptas culpa vitae modi, earum velit exercitationem. Dolores laborum cum ex consequatur placeat dolor voluptas neque nemo, cupiditate fugit possimus doloribus odit omnis tempora! Ad quos expedita perferendis neque? Quam quae fugit minus distinctio quasi pariatur error incidunt suscipit facilis id laborum ratione vitae nemo natus delectus, earum eius laboriosam?</p>
    `,
    author: {
      name: "John Smith",
      avatarUrl: "https://i.pravatar.cc/150?img=2",
    },
    date: "22-12-2025",
  },

  {
    id: 3,
    imageUrl:
      "https://i.pinimg.com/736x/ca/05/7c/ca057c30250013986864c059e836189c.jpg",
    category: "Web Development",
    title: "Next.js vs. Remix: A Detailed Comparison",
    description:
      "Which framework is right for your next project? We compare performance, features, and developer experience.",
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit quisquam ut laudantium earum adipisci delectus ratione consequuntur. Facilis ullam sint, ducimus rem distinctio mollitia facere esse sit ipsam natus ex aperiam cum unde odio nostrum. Est facilis reprehenderit molestias fuga consequuntur assumenda architecto repudiandae tenetur possimus repellat inventore saepe quae incidunt, doloribus quidem. Quibusdam minus vero quia cupiditate, nesciunt excepturi fugiat labore culpa corrupti? Earum quae nobis totam nam aperiam expedita unde cumque accusantium, ratione incidunt, quia repellat quibusdam alias maxime soluta labore autem! Hic laudantium totam eum nisi culpa quo rerum itaque iusto ipsam provident! Iusto deleniti architecto inventore voluptas culpa vitae modi, earum velit exercitationem. Dolores laborum cum ex consequatur placeat dolor voluptas neque nemo, cupiditate fugit possimus doloribus odit omnis tempora! Ad quos expedita perferendis neque? Quam quae fugit minus distinctio quasi pariatur error incidunt suscipit facilis id laborum ratione vitae nemo natus delectus, earum eius laboriosam?</p>
    `,
    author: {
      name: "John Smith",
      avatarUrl:
        "https://i.pravatar.cc/150?img=2",
    },
    date: "2025-11-22",
  },

  {
    id: 4,
    imageUrl:
      "https://i.pinimg.com/736x/cf/82/c5/cf82c5d9ec1d1277b9c8668bb5d9cc69.jpg",
    category: "Web Development",
    title: "Next.js vs. Remix: A Detailed Comparison",
    description:
      "Which framework is right for your next project? We compare performance, features, and developer experience.",
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit quisquam ut laudantium earum adipisci delectus ratione consequuntur. Facilis ullam sint, ducimus rem distinctio mollitia facere esse sit ipsam natus ex aperiam cum unde odio nostrum. Est facilis reprehenderit molestias fuga consequuntur assumenda architecto repudiandae tenetur possimus repellat inventore saepe quae incidunt, doloribus quidem. Quibusdam minus vero quia cupiditate, nesciunt excepturi fugiat labore culpa corrupti? Earum quae nobis totam nam aperiam expedita unde cumque accusantium, ratione incidunt, quia repellat quibusdam alias maxime soluta labore autem! Hic laudantium totam eum nisi culpa quo rerum itaque iusto ipsam provident! Iusto deleniti architecto inventore voluptas culpa vitae modi, earum velit exercitationem. Dolores laborum cum ex consequatur placeat dolor voluptas neque nemo, cupiditate fugit possimus doloribus odit omnis tempora! Ad quos expedita perferendis neque? Quam quae fugit minus distinctio quasi pariatur error incidunt suscipit facilis id laborum ratione vitae nemo natus delectus, earum eius laboriosam?</p>
    `,
    author: {
      name: "John Smith",
      avatarUrl:
        "https://i.pinimg.com/736x/4c/02/bf/4c02bff3445d2d5ed9c86cd112f88918.jpg",
    },
    date: "12-10-2021",
  },

  {
    id: 5,
    imageUrl:
      "https://i.pinimg.com/1200x/eb/fb/af/ebfbaf8973f70c01a5a1a957c4201485.jpg",
    category: "AI & ML",
    title: "The Rise of Generative AI",
    description:
      "Exploring ChatGPT, DALL-E and the next wave of AI applications.",
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit quisquam ut laudantium earum adipisci delectus ratione consequuntur. Facilis ullam sint, ducimus rem distinctio mollitia facere esse sit ipsam natus ex aperiam cum unde odio nostrum. Est facilis reprehenderit molestias fuga consequuntur assumenda architecto repudiandae tenetur possimus repellat inventore saepe quae incidunt, doloribus quidem. Quibusdam minus vero quia cupiditate, nesciunt excepturi fugiat labore culpa corrupti? Earum quae nobis totam nam aperiam expedita unde cumque accusantium, ratione incidunt, quia repellat quibusdam alias maxime soluta labore autem! Hic laudantium totam eum nisi culpa quo rerum itaque iusto ipsam provident! Iusto deleniti architecto inventore voluptas culpa vitae modi, earum velit exercitationem. Dolores laborum cum ex consequatur placeat dolor voluptas neque nemo, cupiditate fugit possimus doloribus odit omnis tempora! Ad quos expedita perferendis neque? Quam quae fugit minus distinctio quasi pariatur error incidunt suscipit facilis id laborum ratione vitae nemo natus delectus, earum eius laboriosam?</p>
    `,
    author: {
      name: "Alice Green",
      avatarUrl: "https://i.pravatar.cc/150?img=11",
    },
    date: "2021-10-10",
  },

  {
    id: 6,
    imageUrl:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070",
    category: "Cybersecurity",
    title: "How to Stay Safe in the Digital Age",
    description: "Top tips and strategies for staying secure online.",
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit quisquam ut laudantium earum adipisci delectus ratione consequuntur. Facilis ullam sint, ducimus rem distinctio mollitia facere esse sit ipsam natus ex aperiam cum unde odio nostrum. Est facilis reprehenderit molestias fuga consequuntur assumenda architecto repudiandae tenetur possimus repellat inventore saepe quae incidunt, doloribus quidem. Quibusdam minus vero quia cupiditate, nesciunt excepturi fugiat labore culpa corrupti? Earum quae nobis totam nam aperiam expedita unde cumque accusantium, ratione incidunt, quia repellat quibusdam alias maxime soluta labore autem! Hic laudantium totam eum nisi culpa quo rerum itaque iusto ipsam provident! Iusto deleniti architecto inventore voluptas culpa vitae modi, earum velit exercitationem. Dolores laborum cum ex consequatur placeat dolor voluptas neque nemo, cupiditate fugit possimus doloribus odit omnis tempora! Ad quos expedita perferendis neque? Quam quae fugit minus distinctio quasi pariatur error incidunt suscipit facilis id laborum ratione vitae nemo natus delectus, earum eius laboriosam?</p>
    `,
    author: {
      name: "David Clark",
      avatarUrl: "https://i.pravatar.cc/150?img=12",
    },
    date: "2025-12-12",
  },
];