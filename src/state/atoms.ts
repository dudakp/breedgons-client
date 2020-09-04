import { atom, RecoilState, selector } from 'recoil';

interface CharacterFilter {
  page: string,
}

export const navBarAtom: RecoilState<CharacterFilter> = atom({
  key: 'navBar',
  default: {
    page: 'dragons',
  }
});

export const navbarSelector = selector({
  key: 'navbarPageSelector',
  get: ({ get }) => {
    return get(navBarAtom).page === 'dragons' ? 'Draci kokote' : 'kup si nejaku kokotinu';
  }
});