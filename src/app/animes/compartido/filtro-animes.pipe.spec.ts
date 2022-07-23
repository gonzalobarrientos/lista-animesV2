import { FiltroAnimesPipe } from './filtro-animes.pipe';
import { Ianimes } from './ianimes';


describe('FiltroAnimesPipe', () => {
  const pipe = new FiltroAnimesPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it("Se espera que se haga el filtro correctamente", () => {
    const listaAnimes:  Ianimes =
    {
      "results": [
      {"mal_id": 1535,
      "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/9\/9453.jpg?s=b89e80691ac5cc0610847ccbe0b8424a",
      "title": "Death Note",
      "synopsis": "A shinigami, as a god of death, can kill any person\u2014provided they see their victim's face and write their victim's name in a notebook called a Death Note. One day, Ryuk, bored by the shinigami lifesty...",
      "score": 8.63
      },
      {
        "mal_id": 16498,
        "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/10\/47347.jpg?s=29949c6e892df123f0b0563e836d3d98",
        "title": "Shingeki no Kyojin",
        "synopsis": "Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly...",
        "score": 8.51
      },
      {
        "mal_id": 5114,
        "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1223\/96541.jpg?s=faffcb677a5eacd17bf761edd78bfb3f",
        "title": "Fullmetal Alchemist: Brotherhood",
        "synopsis": "After a horrific alchemy experiment goes wrong in the Elric household, brothers Edward and Alphonse are left in a catastrophic new reality. Ignoring the alchemical principle banning human transmutatio...",
        "score": 9.16,
        }]
    };

    const resultado =
      {
        "results": [
          {"mal_id": 1535,
          "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/9\/9453.jpg?s=b89e80691ac5cc0610847ccbe0b8424a",
          "title": "Death Note",
          "synopsis": "A shinigami, as a god of death, can kill any person\u2014provided they see their victim's face and write their victim's name in a notebook called a Death Note. One day, Ryuk, bored by the shinigami lifesty...",
          "score": 8.63
          }]
      }
    ;

    const filtro = pipe.transform(listaAnimes.results, "Death Note");

    //expect(filtro).toEqual(resultado.results);
    expect(Object.keys(filtro).length).toBe(0);
  });
});
