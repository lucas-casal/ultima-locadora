import rentalsRepository from "repositories/rentals-repository";
import rentalsServices from "services/rentals-service";

jest.spyOn(rentalsRepository, 'getRentals').mockImplementation((): any =>{
  return {
    id: 4,
    date: '1997-05-17',
    endDate: '1997-05-21',
    userId: 1,
    closed: true
  }
})

describe("Rentals Service Unit Tests", () => {
  it("should pass", async () => {
    const result = await rentalsServices.getRentals()
    expect(result).toEqual({
      id: 4,
      date: '1997-05-17',
      endDate: '1997-05-21',
      userId: 1,
      closed: true
    });
  })

  it("should pass", async () => {
    const result = await rentalsServices.getRentals()
    expect(result).toEqual({
      id: 4,
      date: '1997-05-17',
      endDate: '1997-05-21',
      userId: 1,
      closed: true
    });
  })
})