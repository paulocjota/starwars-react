export default function buildSearchParams(params=[]){
    const paramsObj = new URLSearchParams()

    Object.keys(params).forEach( key => {
        if(params[key].length !== 0) paramsObj.append(key, params[key])
    })

    const finalParams = paramsObj.toString()
    return finalParams ? '?' + finalParams : ''
}