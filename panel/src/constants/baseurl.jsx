function baseurl() {
    return process.env.NODE_ENV !== 'production' ? 'https://api-v1-staging.growng.company/api/v1/admin' : 'https://api-v1-staging.growng.company/api/v1/admin'
}
export default baseurl