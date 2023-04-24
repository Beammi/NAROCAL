-- CreateTable
CREATE TABLE "public"."Payment" (
    "id" SERIAL NOT NULL,
    "cusPayId" INTEGER NOT NULL,
    "venPayId" INTEGER NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Payment_cusPayId_key" ON "public"."Payment"("cusPayId");

-- CreateIndex
CREATE UNIQUE INDEX "Payment_venPayId_key" ON "public"."Payment"("venPayId");

-- AddForeignKey
ALTER TABLE "public"."Payment" ADD CONSTRAINT "Payment_cusPayId_fkey" FOREIGN KEY ("cusPayId") REFERENCES "public"."CustomerProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Payment" ADD CONSTRAINT "Payment_venPayId_fkey" FOREIGN KEY ("venPayId") REFERENCES "public"."VendorProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
