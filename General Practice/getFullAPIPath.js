/* GetFullAPIPath
Create a function getFullAPIEndpoint(api_secretKey: string, main_path: string), which returns a function(api_endpoint_path), which returns a full API path as string 'main_path/api_endpoint_path/api_secretKey'
*/

function getFullAPIEndpoin(api_secretKey, main_path) {
    return function(api_endpoint_path) {
        return `htttp://${main_path}/${api_endpoint_path}/${api_secretKey}`
    }
}

const getFullAPIPath = getFullAPIEndpoin('qwerty_asdf_zxcv_12poiuytrewq', 'fakeserver.domain.com');
getFullAPIPath('users')