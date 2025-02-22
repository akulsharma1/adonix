import "dotenv";

abstract class Constants {
	// Status codes
	static readonly SUCCESS:number = 200;
	static readonly BAD_REQUEST:number = 400;
	static readonly FAILURE:number = 400;
	static readonly UNAUTHORIZED_REQUEST:number = 401;
	static readonly FORBIDDEN:number = 403;
	static readonly NOT_FOUND:number = 404;
	static readonly OLD_API:number = 418;
	static readonly INTERNAL_ERROR:number = 500;

	// URLs
	private static readonly IOS_DEVICE:string = "ios";
	private static readonly IOS_REDIRECT:string = "hackillinois://login/";

	private static readonly WEB_DEVICE:string = "web";
	private static readonly WEB_REDIRECT:string = "https://www.hackillinois.org/auth/";

	private static readonly ANDROID_DEVICE:string = "android";
	private static readonly ANDROID_REDIRECT:string = "hackillinois://login/";
	
	static readonly DEFAULT_DEVICE:string = this.WEB_DEVICE;
	static readonly DEFAULT_REDIRECT:string = this.WEB_REDIRECT;

	static readonly REDIRECT_MAPPINGS: Map<string, string> = new Map<string, string>([
		[ this.WEB_DEVICE, this.WEB_REDIRECT ],
		[ this.IOS_DEVICE, this.IOS_REDIRECT ],
		[ this.ANDROID_DEVICE, this.ANDROID_REDIRECT ],
		[ this.DEFAULT_DEVICE, this.DEFAULT_REDIRECT ],
	]);

	static readonly DEVICE_LIST: string[] = [ this.IOS_DEVICE, this.ANDROID_DEVICE, this.WEB_DEVICE, this.DEFAULT_DEVICE ];

	static readonly GITHUB_OAUTH_CALLBACK:string = "https://adonix.hackillinois.org/auth/github/callback/";
	// static readonly GITHUB_OAUTH_CALLBACK:string = "http://localhost:3000/auth/github/callback/";
	static readonly GOOGLE_OAUTH_CALLBACK:string = "https://adonix.hackillinois.org/auth/google/callback/";

	static readonly SYSTEM_ADMIN_LIST:string[] = (process.env.SYSTEM_ADMINS ?? "").split(",");
	
	static readonly DEFAULT_JWT_OFFSET: string = "48h";

	// Conversions for datetimes
	static readonly MILLISECONDS_PER_SECOND:number = 1000;
}

export default Constants;
