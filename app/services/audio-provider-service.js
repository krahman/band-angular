/**
 * Created by Khal on 19/7/17.
 */
export default () => {
    let audioProviderService = {};

    audioProviderService.getAudios = () => {
        return [
            'https://static.bandlab.com/soundbanks/previews/new-wave-kit.ogg',
            'https://static.bandlab.com/soundbanks/previews/synth-organ.ogg'
        ]
    };

    return audioProviderService;
}