export class Compare {

	protected isArrayCheckCompare: string 
	protected isBufferCheckCompare: string 
	protected isPromiseCheckCompare: string
	protected isFunctionCheckCompare: string 
	protected isObjectCheckCompare: string 
	protected isNullCheckCompare: string
	protected isUndefinedCheckCompare: string 
	protected isStringCheckCompare: string
	protected isNumberCheckCompare: string 
	protected isBooleanCheckCompare: string
	protected isTypeData: string[]
	protected isMatch: number
	protected isResult: string

 constructor() {
 		this.isTypeData = ['array', 'buffer', 'promise', 'function', 'object', 'null', 'undefined', 'string', 'number', 'boolean']
 }

 public isArrayCompare(data: any[], compare: any[]): boolean {
 	  this.isArrayCheckCompare = Array.isArray(data) && Array.isArray(compare) && 'array'
 	  this.isMatch = this.isTypeData.indexOf(this.isArrayCheckCompare)
		this.isResult = this.isTypeData[this.isMatch]
		return this.isResult === 'array' ? true : false
 }

 public isBufferCompare(data: Buffer, compare: Buffer): boolean {
 	  this.isBufferCheckCompare = Buffer.isBuffer(data) && Buffer.isBuffer(compare) && 'buffer'
 	  this.isMatch = this.isTypeData.indexOf(this.isBufferCheckCompare)
		this.isResult = this.isTypeData[this.isMatch]
		return this.isResult === 'buffer' ? true : false
 }

  public isPromiseCompare(data: Promise<any>, compare: Promise<any>): boolean {
 	  this.isPromiseCheckCompare = data instanceof Promise && compare instanceof Promise && 'promise'
 	  this.isMatch = this.isTypeData.indexOf(this.isPromiseCheckCompare)
		this.isResult = this.isTypeData[this.isMatch]
		return this.isResult === 'promise' ? true : false
 }

   public isFunctionCompare(data: any, compare: any): boolean {
 	  this.isFunctionCheckCompare = data instanceof Function && compare instanceof Function && 'function'
 	  this.isMatch = this.isTypeData.indexOf(this.isFunctionCheckCompare)
		this.isResult = this.isTypeData[this.isMatch]
		return this.isResult === 'function' ? true : false
 }

   public isObjectCompare(data: Record<string ,any>, compare: Record<string ,any>): boolean {
 	  this.isObjectCheckCompare = Object.getOwnPropertyNames(data)[0] !== (undefined || null || 'length') 
 	  && Object.getOwnPropertyNames(compare)[0] !== (undefined || null || 'length') 
 	  || Object.create(data) === Object.create({}) 
 	  || Object.create(compare) === Object.create({})
				? 'object'
				: 'undefined'
 	  this.isMatch = this.isTypeData.indexOf(this.isObjectCheckCompare)
		this.isResult = this.isTypeData[this.isMatch]
		return this.isResult === 'object' ? true : false
 }

   public isNullCompare(data: null, compare: null): boolean {
 	  this.isNullCheckCompare = data === null && compare === null && 'null'
 	  this.isMatch = this.isTypeData.indexOf(this.isNullCheckCompare)
		this.isResult = this.isTypeData[this.isMatch]
		return this.isResult === 'null' ? true : false
 }

   public isUndefinedCompare(data: undefined, compare: undefined): boolean {
 	  this.isUndefinedCheckCompare = data === undefined && compare === undefined && 'undefined'
 	  this.isMatch = this.isTypeData.indexOf(this.isUndefinedCheckCompare)
		this.isResult = this.isTypeData[this.isMatch]
		return this.isResult === 'undefined' ? true : false
 }

   public isStringCompare(data: string, compare: string): boolean {
 	  this.isStringCheckCompare = typeof data === 'string' && typeof compare === 'string' && 'string'
 	  this.isMatch = this.isTypeData.indexOf(this.isStringCheckCompare)
		this.isResult = this.isTypeData[this.isMatch]
		return this.isResult === 'string' ? true : false
 }

   public isNumberCompare(data: number, compare: number): boolean {
 	  this.isNumberCheckCompare = typeof data === 'number' && typeof compare === 'number' && 'number'
 	  this.isMatch = this.isTypeData.indexOf(this.isNumberCheckCompare)
		this.isResult = this.isTypeData[this.isMatch]
		return this.isResult === 'number' ? true : false
 }

   public isBooleanCompare(data: boolean, compare: boolean): boolean {
 	  this.isBooleanCheckCompare = typeof data === 'boolean' && typeof compare === 'boolean' && 'boolean'
 	  this.isMatch = this.isTypeData.indexOf(this.isBooleanCheckCompare)
		this.isResult = this.isTypeData[this.isMatch]
		return this.isResult === 'boolean' ? true : false
 }

}