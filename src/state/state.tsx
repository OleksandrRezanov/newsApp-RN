import { create } from 'zustand';

export interface News {
  id: string;
  imageURL: string;
  link: string;
  newsBody: string;
  timeStamp: Date;
  title: string;
}

interface State {
  news: News[];
  setNews: (newsFromServer: News[]) => void;

  newsIdToDelete: string;
  setNewsIdToDelete: (idToDelete: string) => void;

  isModalOpen: boolean;
  setIsModalOpen: (param: boolean) => void;

  isLoading: boolean;
  setIsLoading: (param: boolean) => void;

  isButtonDisabled: boolean;
  setIsButtonDisabled: (param: boolean) => void;

  newsItemToShow: News | null;
  setNewsItemToShow: (newsItem: News | null) => void;

  searchParams: string;
  setSearchParams: (params: string) => void;
}

export const useStore = create<State>(set => ({
  news: [],
  setNews: newsFromServer =>
    set((state: State) => ({ ...state, news: newsFromServer })),

  newsIdToDelete: '',
  setNewsIdToDelete: idToDelete =>
    set((state: State) => ({ ...state, newsIdToDelete: idToDelete })),

  isModalOpen: false,
  setIsModalOpen: param =>
    set((state: State) => ({ ...state, isModalOpen: param })),

  isLoading: false,
  setIsLoading: param =>
    set((state: State) => ({ ...state, isLoading: param })),

  isButtonDisabled: true,
  setIsButtonDisabled: param =>
    set((state: State) => ({ ...state, isButtonDisabled: param })),

  newsItemToShow: null,
  setNewsItemToShow: newsToShow =>
    set((state: State) => ({ ...state, newsItemToShow: newsToShow })),

  searchParams: '',
  setSearchParams: params =>
    set((state: State) => ({ ...state, searchParams: params })),
}));
