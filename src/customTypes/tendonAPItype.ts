/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface User {
  /** @example "user" */
  type?: string;
  /** @example "6303306a448342f4bb47fb2e" */
  id?: string;
  attributes?: {
    /** @example "John" */
    firstName?: string;
    /** @example "dodo" */
    lastName?: string;
    /** @example "John@email.com" */
    email?: string;
    /** @example "student" */
    role?: "student" | "teacher" | "admin";
    /** @example 1663598072 */
    createAt?: number;
    /** @example 1663599923 */
    updateAt?: number;
  };
}

export interface BriefCurriculum {
  /** @example "briefCurriculum" */
  type?: string;
  /** @example "63173c3f997fd51cea50fb32" */
  id?: string;
  attributes?: {
    /** @example "Gen physics" */
    curriculumName?: string;
    /** @example "University physics for year 1" */
    curriculumDescription?: string;
    accessLevel?: "public" | "inviteOnly" | "private";
    /**
     * @min 0
     * @max 100
     * @example 79
     */
    proGress?: number;
  };
}

export interface Curriculum {
  /** @example "curriculum" */
  type?: string;
  /** @example "63173c3f997fd51cea50fb32" */
  id?: string;
  attributes?: {
    /** @example "Gen physics" */
    curriculumName?: string;
    /** @example "University physics for year 1" */
    curriculumDescription?: string;
    accessLevel?: "public" | "inviteOnly" | "private";
    subLearningNode?: BriefLearningNode[];
  };
  relationships?: {
    /**
     * @min 0
     * @max 100
     * @example 79
     */
    progress?: number;
  };
}

export interface BriefLearningNode {
  /** @example "briefLearningNode" */
  type?: string;
  id?: string;
  attributes?: {
    curriculums?: BriefCurriculum[];
    learningNodeName?: string;
    learningNodeDescription?: string;
  };
}

export interface LearningNode {
  /** @example "briefLearningNode" */
  type?: string;
  id?: string;
  attributes?: {
    learningNodeName?: string;
    learningNodeDescription?: string;
    curriculums?: BriefCurriculum[];
    subNode?: Node[];
    nextLearningNodeId?: BriefLearningNode[];
    previousLearningNodeId?: BriefLearningNode[];
  };
}

export interface Node {
  name: string
  type: "pdfNode" | "videoNode" | "textNode" | "soundNode" | "imageNode";
  id: string;
  attributes: {
    priority: "require" | "extension" | "optional";
    size: number;
    /** @example "/resources/pdf/1234" */
    resources: string;
  };
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "http://tendont52@tendon.tplinkdns.com";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
          .then((data) => {
            if (r.ok) {
              r.data = data;
            } else {
              r.error = data;
            }
            return r;
          })
          .catch((e) => {
            r.error = e;
            return r;
          });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Tendon API
 * @version 1.0
 * @baseUrl http://tendont52@tendon.tplinkdns.com
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * @description get user information at specific id
     *
     * @name UsersDetail
     * @request GET:/api/users/{id}
     * @secure
     */
    usersDetail: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          data?: User;
          relationships?: {
            curriculums?: BriefCurriculum[];
          };
        },
        | {
          /** @example "Unauthorized" */
          massage?: string;
        }
        | {
          /** @example "Not found" */
          massage?: string;
        }
      >({
        path: `/api/users/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name UsersPartialUpdate
     * @request PATCH:/api/users/{id}
     * @secure
     */
    usersPartialUpdate: (
      id: string,
      data: {
        /** @example "John" */
        firstName?: string;
        /** @example "dodo" */
        lastName?: string;
        /** @example "John@email.com" */
        email?: string;
        /** @example "43aad@#134" */
        password?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "Success" */
          message?: string;
          token?: string;
        },
        | {
          /** @example "Unauthorized" */
          massage?: string;
        }
        | {
          /** @example "Not found" */
          massage?: string;
        }
        | object
      >({
        path: `/api/users/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name UsersDelete
     * @request DELETE:/api/users/{id}
     * @secure
     */
    usersDelete: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          /** @example "Success" */
          message?: string;
          token?: string;
        },
        {
          /** @example "wrong email or password" */
          message?: string;
        }
      >({
        path: `/api/users/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @name UserSignUpCreate
     * @request POST:/api/user/sign-up
     */
    userSignUpCreate: (
      data: {
        attributes?: {
          /** @example "NewName" */
          firstName: string;
          /** @example "NewLastName" */
          lastName: string;
          /** @example "NewEmail" */
          email: string;
          /**
           * @format password
           * @example "NewPassword"
           */
          password: string;
        };
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "Success" */
          message?: string;
          token?: string;
        },
        | {
          /** @example "Unauthorized" */
          massage?: string;
        }
        | {
          /** @example "Not found" */
          massage?: string;
        }
        | object
      >({
        path: `/api/user/sign-up`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name UserSignInCreate
     * @request POST:/api/user/sign-in
     * @secure
     */
    userSignInCreate: (
      data: {
        /** @example "tendon@gmail.com" */
        email?: string;
        /** @format password */
        password?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "Success" */
          message?: string;
          token?: string;
        },
        {
          /** @example "wrong email or password" */
          message?: string;
        }
      >({
        path: `/api/user/sign-in`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name UserSignOutCreate
     * @request POST:/api/user/sign-out
     * @secure
     */
    userSignOutCreate: (
      data: {
        /** @example "tendon@gmail.com" */
        email?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "Success" */
          message?: string;
        },
        | {
          /** @example "Unauthorized" */
          massage?: string;
        }
        | {
          /** @example "Email not match" */
          message?: string;
        }
      >({
        path: `/api/user/sign-out`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name TokenRefreshCreate
     * @request POST:/api/token/refresh
     * @secure
     */
    tokenRefreshCreate: (
      data: {
        refreshToken?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "Success" */
          message?: string;
          token?: string;
          refreshToken?: string;
        },
        {
          /** @example "Unauthorized" */
          massage?: string;
        }
      >({
        path: `/api/token/refresh`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name CurriculaDetail
     * @request GET:/api/curricula/{id}
     */
    curriculaDetail: (id: string, params: RequestParams = {}) =>
      this.request<
        Curriculum,
        | {
          /** @example "Unauthorized" */
          massage?: string;
        }
        | {
          /** @example "Not found" */
          massage?: string;
        }
      >({
        path: `/api/curricula/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name CurriculaPartialUpdate
     * @request PATCH:/api/curricula/{id}
     */
    curriculaPartialUpdate: (
      id: string,
      data: {
        /** @example "Gen physics" */
        curriculumName?: string;
        /** @example "University physics for year 1" */
        curriculumDescription?: string;
        accessLevel?: "public" | "inviteOnly" | "private";
        addSubLearningNode?: string[];
        deleteLearningNode?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/curricula/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name CurriculaDelete
     * @request DELETE:/api/curricula/{id}
     */
    curriculaDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/curricula/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @name CurriculaCreate
     * @request POST:/api/curricula
     */
    curriculaCreate: (
      data: {
        /** @example "Gen physics" */
        curriculumName?: string;
        /** @example "University physics for year 1" */
        curriculumDescription?: string;
        accessLevel?: "public" | "inviteOnly" | "private";
        subLearningNode?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/curricula`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name LearningNodesDetail
     * @request GET:/api/learning-nodes/{id}
     */
    learningNodesDetail: (id: string, params: RequestParams = {}) =>
      this.request<LearningNode, any>({
        path: `/api/learning-nodes/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name LearningNodesPartialUpdate
     * @request PATCH:/api/learning-nodes/{id}
     */
    learningNodesPartialUpdate: (
      id: string,
      data: {
        learningNodeName?: string;
        learningNodeDescription?: string;
        addCurriculums?: string[];
        deleteCurriculums?: string[];
        addSubNode?: string[];
        deleteSubNode?: string[];
        addNextLearningNodeId?: string[];
        delNextLearningNodeId?: string[];
        addPreviousLearningNodeId?: string[];
        delPreviousLearningNodeId?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/learning-nodes/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name LearningNodesDelete
     * @request DELETE:/api/learning-nodes/{id}
     */
    learningNodesDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/learning-nodes/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @name LearningNodesCreate
     * @request POST:/api/learning-nodes
     */
    learningNodesCreate: (
      data: {
        learningNodeName?: string;
        learningNodeDescription?: string;
        curriculums?: string[];
        subNode?: string[];
        nextLearningNodeId?: string[];
        previousLearningNodeId?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/learning-nodes`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name NodesDelete
     * @request DELETE:/api/nodes/{id}
     */
    nodesDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/nodes/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @name NodesCreate
     * @request POST:/api/nodes
     */
    nodesCreate: (
      data: {
        type?: "pdfNode" | "videoNode" | "textNode" | "soundNode" | "imageNode";
        attributes?: {
          priority?: "require" | "extension" | "optional";
        };
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/nodes`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  };
  resources = {
    /**
     * No description
     *
     * @name VideoDetail
     * @request GET:/resources/video/{id}
     */
    videoDetail: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/resources/video/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @name VideoCreate
     * @request POST:/resources/video
     */
    videoCreate: (
      data: {
        nodeId?: string;
        userId?: string;
        /** @format binary */
        fileName?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/resources/video`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @name GetResources
     * @request GET:/resources/pdf/{id}
     */
    getResources: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/resources/pdf/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @name PostResources
     * @request POST:/resources/pdf
     */
    postResources: (
      data: {
        nodeId?: string;
        userId?: string;
        /** @format binary */
        fileName?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/resources/pdf`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @name TextDetail
     * @request GET:/resources/text/{id}
     */
    textDetail: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/resources/text/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @name TextCreate
     * @request POST:/resources/text
     */
    textCreate: (
      data: {
        nodeId?: string;
        userId?: string;
        /** @format binary */
        fileName?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/resources/text`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @name ImageDetail
     * @request GET:/resources/image/{id}
     */
    imageDetail: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/resources/image/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @name ImageCreate
     * @request POST:/resources/image
     */
    imageCreate: (
      data: {
        nodeId?: string;
        userId?: string;
        /** @format binary */
        fileName?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/resources/image`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @name SoundDetail
     * @request GET:/resources/sound/{id}
     */
    soundDetail: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/resources/sound/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @name SoundCreate
     * @request POST:/resources/sound
     */
    soundCreate: (
      data: {
        nodeId?: string;
        userId?: string;
        /** @format binary */
        fileName?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/resources/sound`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),
  };
}
