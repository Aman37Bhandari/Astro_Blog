export type Account = {
  id: string;
  username: string | null;
  email: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  phone: string;
  pincode: number;
  address: string;
  created_at: string;
  verified: boolean;
  banned: boolean;
  admin: boolean;
  blocked: boolean;
};

export type CachedAccount = Account & {
  password: string;
};

export type BlogsList = {
  id: string;
  title: string;
  short_description: string;
  author: {
    id: string;
    name: string;
  };
  created_at: string;
  category: string;
  slug: string;
  thumbnail_id: string;
  tags: string[];
}[];

export type Blog = {
  id: string;
  title: string;
  short_description: string;
  author: {
    id: string;
    name: string;
  };
  created_at: string;
  updated_at: string | null;
  category: string;
  slug: string;
  content: string;
  thumbnail_id: string;
  tags: string[];
  visitors: number;
  slider_images: string[];
  comments: {
    id: string;
    author: {
      id: string;
      name: string;
    };
    comment: string;
    created_at: string;
  }[];
};
