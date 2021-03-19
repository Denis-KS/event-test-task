export function fetchActivities() {
    return fetch('http://www.mocky.io/v2/5bcdd3942f00002c00c855ba')
        .then((result: Response) => result.json());
};

export function fetchCoordinators() {
    return fetch('http://www.mocky.io/v2/5bcdd7992f00006300c855d5')
        .then((result: Response) => result.json());
};
