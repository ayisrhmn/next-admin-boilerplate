"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-background flex items-center justify-center p-4 mt-24">
      <Card className="w-full max-w-md">
        <CardContent className="pt-6">
          <div className="text-center space-y-6">
            {/* 404 Number */}
            <div className="space-y-2">
              <h1 className="text-8xl font-bold text-primary">404</h1>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            {/* Error Message */}
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">Halaman Tidak Ditemukan</h2>
              <p className="text-muted-foreground text-balance">
                Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin halaman telah
                dipindahkan atau URL yang dimasukkan salah.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 pt-4">
              <Button asChild type="button">
                <Link href="/">
                  <Home className="w-4 h-4 mr-2" />
                  Kembali ke Dashboard
                </Link>
              </Button>

              <Button type="button" variant="outline" onClick={() => window.history.back()}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Halaman Sebelumnya
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
