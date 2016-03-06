import {Injectable} from 'angular2/core';
import {Headers, RequestOptions} from 'angular2/http';

export class Wall {
    constructor(public id:string, public images:Array<string>) {
    }
}

@Injectable()
export class WallService {
    getImages(wall_id:string) {
        return wallPromise;
    }
}

var IMAGES = ["https://eventwall.blob.core.windows.net/ya57kr5d/1457278887_CcAzVBFWAAAbqF0.jpg", "https://eventwall.blob.core.windows.net/ya57kr5d/1457278908_Cc3XOtJUkAIw7E7.jpg", "https://eventwall.blob.core.windows.net/ya57kr5d/1457278916_Cc1CP9UVIAAdKNg.jpg", "https://eventwall.blob.core.windows.net/ya57kr5d/1457278921_Cc0pLzHUMAA4LTU.jpg", "https://eventwall.blob.core.windows.net/ya57kr5d/1457278927_Cc05ZdKVAAE8hNB.jpg", "https://eventwall.blob.core.windows.net/ya57kr5d/1457278933_Cc1zALHW8AE2JVn.jpg", "https://eventwall.blob.core.windows.net/ya57kr5d/1457278938_CczPi5fUkAANe6.jpg", "https://eventwall.blob.core.windows.net/ya57kr5d/1457278943_CcznCuLWEAE2yOM.jpg", "https://eventwall.blob.core.windows.net/ya57kr5d/1457278947_Cczq2Y-XEAAMkVs.jpg", "https://eventwall.blob.core.windows.net/ya57kr5d/1457278951_Cc0uLeXXEAAuhRp.jpg", "https://eventwall.blob.core.windows.net/ya57kr5d/1457278955_Cc3zB1DWEAA8N8z.jpg", "https://eventwall.blob.core.windows.net/ya57kr5d/1457278960_Ccy1HlwXIAElCkb.jpg", "https://eventwall.blob.core.windows.net/ya57kr5d/1457278964_Cc0S5HJW4AAUmRJ.jpg", "https://eventwall.blob.core.windows.net/ya57kr5d/1457278969_Cc0jLMDXIAEyXNV.jpg", "https://eventwall.blob.core.windows.net/ya57kr5d/1457278973_Ccz90hLUUAECnZg.jpg", "https://eventwall.blob.core.windows.net/ya57kr5d/1457278977_Cc1UFceW4AACEP9.jpg", "https://eventwall.blob.core.windows.net/ya57kr5d/1457278982_Cc0W8PcW8AEWkOi.jpg", "https://eventwall.blob.core.windows.net/ya57kr5d/1457278986_Cc1BbljUYAAgab.jpg", "https://eventwall.blob.core.windows.net/ya57kr5d/1457278989_CczzBY1VIAEAjW.jpg", "https://eventwall.blob.core.windows.net/ya57kr5d/1457278994_CczzBY1VIAEAjW.jpg", "https://eventwall.blob.core.windows.net/ya57kr5d/1457278997_CczX2kPUEAAiStV.jpg", "https://eventwall.blob.core.windows.net/ya57kr5d/1457279001_CczYVBbW0AALWEX.jpg"];

var wallPromise = Promise.resolve(IMAGES);