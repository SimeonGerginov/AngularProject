import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { getHeaders, handleError } from './miscellaneous';

import { Company } from '../models/company';
import { Injectable } from '@angular/core';
import { Job } from '../models/job';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

@Injectable()
export class CompanyService {

  constructor(private http: Http) { }

  public get(companyId: string): Observable<Company> {
    return this.http.get(`${environment.apiEndpoint}/company/${companyId}`, getHeaders())
      .map((res) => res.json())
      .catch((err: Response) => handleError(err));
  }

  public create(company: Company): Observable<Company> {
    return this.http.post(`${environment.apiEndpoint}/company`, company, getHeaders())
      .map((res) => res.json())
      .catch((err: Response) => handleError(err));
  }

  public update(company: Company): Observable<Company> {
    return this.http.put(`${environment.apiEndpoint}/company/${company.userId}`, company, getHeaders())
      .map((res) => res.json())
      .catch((err: Response) => handleError(err));
  }

  public delete(companyId: string): Observable<any> {
    return this.http.delete(`${environment.apiEndpoint}/company/${companyId}`, getHeaders())
      .map((res) => res.json())
      .catch((err: Response) => handleError(err));
  }

  public getJobs(companyId: string): Observable<Job[]> {
    return this.http.get(`${environment.apiEndpoint}/company/${companyId}/jobs`, getHeaders())
      .map((res) => res.json())
      .catch((err: Response) => handleError(err));
  }

  public addJob(job: Job): Observable<Job> {
    return this.http.post(`${environment.apiEndpoint}/company/${job.companyId}/jobs`, job, getHeaders())
          .map((res) => res.json())
          .catch((err: Response) => handleError(err));
  }

  public updateJob(job: Job): Observable<Job> {
    return this.http.put(`${environment.apiEndpoint}/company/${job.companyId}/jobs/${job._id}`, job, getHeaders())
          .map((res) => res.json())
          .catch((err: Response) => handleError(err));
  }

  public deleteJob(companyId: string, jobId: string): Observable<any> {
    return this.http.put(`${environment.apiEndpoint}/company/${companyId}/jobs/${jobId}`, getHeaders())
          .map((res) => res.json())
          .catch((err: Response) => handleError(err));
  }
}
