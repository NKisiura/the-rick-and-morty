import { HttpInterceptorFn } from "@angular/common/http";
import { API_BASE_URL } from "@shared/constants";

export const apiBaseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const fullUrl = `${API_BASE_URL}/${req.url}`;
  const request = req.clone({ url: fullUrl });

  return next(request);
};
