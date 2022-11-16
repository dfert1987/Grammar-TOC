import { getSifToken } from '../utils/auth';
import { urls } from '../constants';

async function getLaunchDetails(resource_id) {
    const sifToken = await getSifToken();
    const domain = urls[window.location.hostname];
    const integration = 'ed';
    const integrationpoint = 'content';
    const context = 'coursesection';
    const contextid = 'na';

    const url = `${domain}/launcher/1.3.0/${integration}/${integrationpoint}/${context}/${contextid}?resource_id=${resource_id}`;

    const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: sifToken,
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    });
    return response.json();
}

function buildForm(launchParams, formAttributes) {
    const form = document.createElement('form');

    Object.keys(formAttributes).forEach((attributeName) => {
        form.setAttribute(attributeName, formAttributes[attributeName]);
    });

    for (const [key, value] of Object.entries(launchParams)) {
        const hiddenField = document.createElement('input');
        hiddenField.setAttribute('name', key);
        hiddenField.setAttribute('value', value);
        form.appendChild(hiddenField);
    }

    return form;
}

async function postTheForm_1_3_0(
    launchParams,
    {
        target = '_blank',
        httpMethod = 'post',
        encType = 'multipart/form-data',
        targetURL,
    }
) {
    const form = buildForm(launchParams, {
        method: httpMethod,
        action: targetURL,
        name: 'ltiForm_1_3_0',
        id: 'ltiForm_1_3_0',
        style: 'display:none',
        encType,
        target,
    });

    document.body.appendChild(form);

    await form.submit();
    await form.remove();
}

export default async function getLaunchDetails_1_3_0(resource_id) {
    if (!resource_id) {
        alert('No resource_id provided');
        return;
    }
    try {
        const response = await getLaunchDetails(resource_id);
        console.log(response);
        const { targetURL, id_token } = response;

        if (!targetURL || !id_token) {
            throw new Error(
                'Error on getLaunchDetails: no targetURL or id_token found'
            );
        }

        return postTheForm_1_3_0(
            { id_token },
            { target: resource_id, targetURL }
        );
    } catch (e) {
        alert('Error on launching content');
        console.error('Error on launching content: ', e);
    }
}
