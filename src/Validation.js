import { baseurl } from "./baseurl"


export const getData = async (suburl, accessToken, data) => {
    try {
        var responce = await fetch(baseurl + suburl, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
        })
        var responseJson = await responce.json();
        console.log("Responce Json", responseJson)
        return { status: true, data: responseJson }
    } catch (error) {
        return { status: false, errorMessage: JSON.stringify(error) }
    }
}


export const postData = async (suburl, accessToken, data = {}) => {
    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    if (accessToken != "") {
        myHeaders.append('Authorization', `Bearer ${accessToken}`)
    }
    console.log({ myHeaders })
    try {
        var responce = await fetch(baseurl + suburl, {
            method: 'POST',
            headers: myHeaders,
            body: data
        })
        console.log("post Responce", JSON.stringify(responce))
        var responseJson = await responce.json();
        console.log("post Responce Json", responseJson)
        return { status: true, data: responseJson }
    } catch (error) {
        return { status: false, errorMessage: JSON.stringify(error) }
    }
}
