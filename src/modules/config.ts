class ModuleConfig {

    /** 端口号 */
    public readonly port = 1995;

    /** 数据库配置 */
    public readonly db = {
        host: 'localhost',
        user: 'hjs',
        password: 123456,
        database: 'test',
        /** 链接上限次数 */
        connection_limit: 10
    }

    /** 接口地址配置 */
    public readonly api = {
        /** 项目接口前缀 */
        project_interface_prefix: '/api',
        /** 后台接口前缀 */
        admin_interface_prefix: 'admin',
    }

    /** 上传图片地址 */
    public readonly upload_path = 'public/upload';

    /** 上传图片大小限制 */
    public readonly upload_img_size = 5 * 1024 * 1024;

}

/** 项目配置 */
const config = new ModuleConfig();

export default config;