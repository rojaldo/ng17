import { OrderBeersPipe } from './order-beers.pipe';

describe('OrderBeersPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderBeersPipe();
    expect(pipe).toBeTruthy();
  });
});
