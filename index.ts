import { cin } from "node-cin";

let cmd: any = 's', studenti = new Map(),
 v1: number = 0, v2: number = 0, v3: number = 0, v4: number = 0, v5: number = 0,
 voto: any,
 nstudenti: number = 0, media: number = 0, mediaMaggiore: number = 0, stmm: any;

while (cmd != 'n') {
    for (let i = 1; i <= 5; i++) {
        voto = await cin('Voto ' + i, false)
        eval(`v${i} = ${voto}`)
    }
    nstudenti++
    studenti.set('studente' + nstudenti, { v1, v2, v3, v4, v5, nome: nstudenti })
    cmd = await cin('Vuoi un altro studente? y/n', false)
}

studenti.forEach((studente) => {
    media = studente.v1 + studente.v2 + studente.v3 + studente.v4 + studente.v5
    media /= 5
    if (media > mediaMaggiore) {
        mediaMaggiore = media
        stmm = studente.nome
    }
})

console.log("lo studente con la media maggiore è studente" + stmm + " con una media di " + mediaMaggiore)