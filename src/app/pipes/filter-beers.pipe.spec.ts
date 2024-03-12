import { FilterBeersPipe } from './filter-beers.pipe';

describe('FilterBeersPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterBeersPipe();
    expect(pipe).toBeTruthy();
  });
});
