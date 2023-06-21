import { EpisodeInterface } from 'interfaces/episode';
import { GetQueryInterface } from 'interfaces';

export interface PodcastInterface {
  id?: string;
  title: string;
  creator: string;
  category: string;
  created_at?: any;
  updated_at?: any;
  episode?: EpisodeInterface[];

  _count?: {
    episode?: number;
  };
}

export interface PodcastGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  creator?: string;
  category?: string;
}
