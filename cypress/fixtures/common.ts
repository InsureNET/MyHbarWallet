module.exports = {
    // Common
    truncatePrivate(key: string): string {
        const privatePrefix = "302e020100300506032b657004220420";
        return key.replace(privatePrefix, "");
    },
    truncatePublic(key: string): string {
        const publicPrefix = "302a300506032b6570032100";
        return key.replace(publicPrefix, "");
    },
    // Regex
    // eslint-disable-next-line unicorn/no-unsafe-regex
    regexUSD: /^≈ \$([1-9]\d{0,2}(,\d{3})*(\.\d{2})?|[1-9]\d*(\.\d{2})?|0?\.(?!00)\d{2})$/,
    // eslint-disable-next-line unicorn/no-unsafe-regex
    regexHBar: /^([1-9]\d{0,2}(?:,\d{3})*(\.\d{1,9})?|0?\.(?=.*[1-9])\d{1,9}) ℏ$/
}